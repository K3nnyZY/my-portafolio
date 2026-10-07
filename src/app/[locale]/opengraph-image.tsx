import { ImageResponse } from "next/og";

export const alt = "Kenny Zhu — Data, AI & Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const spanish = locale === "es";
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#10151e",
        color: "#eef3fa",
        display: "flex",
        flexDirection: "column",
        padding: "70px",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 32 }}>
        kenny zhu<span style={{ color: "#82bcff" }}>.</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          letterSpacing: -3,
        }}
      >
        <span>{spanish ? "Transformo complejidad" : "Turning complexity"}</span>
        <span style={{ color: "#82bcff" }}>
          {spanish ? "en posibilidades." : "into possibility."}
        </span>
      </div>
      <div style={{ display: "flex", color: "#a6b4c8", fontSize: 24 }}>
        {spanish ? "DATOS · IA · SOFTWARE" : "DATA · AI · SOFTWARE"}
      </div>
    </div>,
    size,
  );
}
