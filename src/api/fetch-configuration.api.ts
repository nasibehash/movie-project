import { ConfigurationType } from "../types/configuration.type.ts";

export async function fetchConfigurationApi(): Promise<ConfigurationType> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/configuration`,
  );

  return await response.json();
}
