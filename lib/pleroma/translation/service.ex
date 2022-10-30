# Pleroma: A lightweight social networking server
# Copyright © 2017-2022 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Translation.Service do
  @callback configured?() :: boolean()

  @callback translate(
              content :: String.t(),
              source_language :: String.t(),
              target_language :: String.t()
            ) ::
              {:ok,
               %{
                 content: String.t(),
                 detected_source_language: String.t(),
                 provider: String.t()
               }}
              | {:error, atom()}
end
