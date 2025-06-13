import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="w-1/3 text-center bg-green-200 p-10 rounded-xl shadow-lg shadow-emerald-800">👋 About This Project
        Welcome to my personal blog app — a learning project built with Next.js, Tailwind CSS, and ShadCN UI. This platform is designed to showcase my journey as I explore full-stack web development, focusing on clean design, reusable components, and a smooth user experience.

This is an open-source project, so feel free to explore the code, reuse components, or build on top of it for your own ideas.

🔗 If you found this helpful or interesting, please consider leaving a ⭐ on my <Link className="font-bold text-blue-500" href='https://github.com/lokeshdot23'>GitHub profile</Link> — your support means a lot!</p>
    </div>
  );
}
