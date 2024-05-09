import Link from "next/link";

export default function DetailPage({ params }: { params: { title: string } }) {
  const title = params.title;
  return (
    <div>
      <h1>Anime: {title}</h1>
    </div>
  );
}
