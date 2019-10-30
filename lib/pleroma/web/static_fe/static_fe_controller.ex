# Pleroma: A lightweight social networking server
# Copyright © 2017-2019 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.StaticFE.StaticFEController do
  use Pleroma.Web, :controller

  alias Pleroma.Activity
  alias Pleroma.Object
  alias Pleroma.User
  alias Pleroma.Web.ActivityPub.ActivityPub
  alias Pleroma.Web.Router.Helpers

  plug(:put_layout, :static_fe)
  plug(:put_view, Pleroma.Web.StaticFE.StaticFEView)
  plug(:assign_id)
  action_fallback(:not_found)

  defp get_title(%Object{data: %{"name" => name}}) when is_binary(name),
    do: name

  defp get_title(%Object{data: %{"summary" => summary}}) when is_binary(summary),
    do: summary

  defp get_title(_), do: nil

  def represent(%Activity{} = activity, %User{} = user, selected) do
    %{
      user: user,
      title: get_title(activity.object),
      content: activity.object.data["content"] || nil,
      attachment: activity.object.data["attachment"],
      link: Helpers.o_status_url(Pleroma.Web.Endpoint, :notice, activity.id),
      published: activity.object.data["published"],
      sensitive: activity.object.data["sensitive"],
      selected: selected
    }
  end

  def represent(%Activity{} = activity, selected) do
    {:ok, user} = User.get_or_fetch(activity.data["actor"])
    represent(activity, user, selected)
  end

  def show_notice(%{assigns: %{notice_id: notice_id}} = conn, _params) do
    activity = Activity.get_by_id_with_object(notice_id)
    context = activity.object.data["context"]
    activities = ActivityPub.fetch_activities_for_context(context, %{})

    represented =
      for a <- Enum.reverse(activities) do
        represent(activity, a.object.id == activity.object.id)
      end

    render(conn, "conversation.html", activities: represented)
  end

  def show_user(%{assigns: %{username_or_id: username_or_id}} = conn, _params) do
    %User{} = user = User.get_cached_by_nickname_or_id(username_or_id)

    timeline =
      for activity <- ActivityPub.fetch_user_activities(user, nil, %{}) do
        represent(activity, user, false)
      end

    render(conn, "profile.html", %{user: user, timeline: timeline})
  end

  def assign_id(%{path_info: ["notice", notice_id]} = conn, _opts),
    do: assign(conn, :notice_id, notice_id)

  def assign_id(%{path_info: ["users", user_id]} = conn, _opts),
    do: assign(conn, :username_or_id, user_id)

  def assign_id(%{path_info: [user_id]} = conn, _opts),
    do: assign(conn, :username_or_id, user_id)

  def assign_id(conn, _opts), do: conn

  # Fallback for unhandled types
  def not_found(conn, _opts) do
    conn
    |> put_status(404)
    |> text("Not found")
  end
end
