import { initializeManifest } from "#app/global-manifest";

try {
  const res = await fetch("./manifest.json");
  if (!res.ok) {
    throw new Error(`Manifest not found: HTTP ${res.status}`);
  }
  const manifest = await res.json();
  initializeManifest(manifest["manifest"]);
} catch (_err) {
  // Manifest not found (local/app build) — silently ignore, caching disabled
}
