# Pleroma: A lightweight social networking server
# Copyright © 2017-2023 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only
defmodule Pleroma.Domain do
  @cachex Pleroma.Config.get([:cachex, :provider], Cachex)

  use Ecto.Schema

  import Ecto.Changeset
  import Ecto.Query

  alias Pleroma.Repo

  schema "domains" do
    field(:domain, :string, default: "")
    field(:service_domain, :string, default: "")
    field(:public, :boolean, default: false)
    field(:resolves, :boolean, default: false)
    field(:last_checked_at, :naive_datetime)

    timestamps(type: :utc_datetime)
  end

  def changeset(%__MODULE__{} = domain, params \\ %{}) do
    domain
    |> cast(params, [:domain, :service_domain, :public])
    |> validate_required([:domain])
    |> maybe_add_service_domain()
    |> update_change(:domain, &String.downcase/1)
    |> unique_constraint(:domain)
    |> unique_constraint(:service_domain)
  end

  def update_changeset(%__MODULE__{} = domain, params \\ %{}) do
    domain
    |> cast(params, [:public])
  end

  def update_state_changeset(%__MODULE__{} = domain, resolves) do
    domain
    |> cast(
      %{
        resolves: resolves,
        last_checked_at: NaiveDateTime.utc_now()
      },
      [:resolves, :last_checked_at]
    )
  end

  defp maybe_add_service_domain(%{changes: %{service_domain: _}} = changeset), do: changeset

  defp maybe_add_service_domain(%{changes: %{domain: domain}} = changeset) do
    change(changeset, service_domain: domain)
  end

  def list do
    __MODULE__
    |> order_by(asc: :id)
    |> Repo.all()
  end

  def get(id), do: Repo.get(__MODULE__, id)

  def get_by_service_domain(domain) do
    __MODULE__
    |> where(service_domain: ^domain)
    |> Repo.one()
  end

  def create(params) do
    %__MODULE__{}
    |> changeset(params)
    |> Repo.insert()
  end

  def update(params, id) do
    get(id)
    |> update_changeset(params)
    |> Repo.update()
  end

  def delete(id) do
    get(id)
    |> Repo.delete()
  end

  def cached_list do
    @cachex.fetch!(:domain_cache, "domains_list", fn _ -> list() end)
  end
end
