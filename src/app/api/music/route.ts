export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req: Request) {
  const user = "jamsenup";
  const apiKey = "02c9bd9aa8737a715c3cc09eef021c63";
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json&limit=1`;

  const headers = {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
  };

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "TwitchBotMusicParser/1.0",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return new Response("Музыка сейчас не играет", {
        status: 200,
        headers,
      });
    }

    const data = await res.json();
    const tracks = data?.recenttracks?.track;
    const total = Number(data?.recenttracks?.["@attr"]?.total || 0);

    if (!tracks || total === 0) {
      return new Response("Музыка сейчас не играет", {
        status: 200,
        headers,
      });
    }

    const track = Array.isArray(tracks) ? tracks[0] : tracks;
    const isNowPlaying = track?.["@attr"]?.nowplaying === "true";
    const artist =
      track?.artist?.["#text"] || track?.artist?.name || "Неизвестный исполнитель";
    const name = track?.name || "Без названия";

    const message = isNowPlaying
      ? `🎵 Сейчас играет: ${artist} — ${name}`
      : `⏸️ Сейчас на паузе (последний трек: ${artist} — ${name})`;

    return new Response(message, {
      status: 200,
      headers,
    });
  } catch (error) {
    return new Response("Музыка сейчас не играет", {
      status: 200,
      headers,
    });
  }
}
