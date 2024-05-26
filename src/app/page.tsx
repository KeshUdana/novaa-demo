import Image from "next/image";
import Avatar from "./../assets/images/profile-pic-placeholder.png";
import { Team } from "@/components/lib/Team";
import Link from "next/link";
import "./index.scss";
import clsx from "clsx";

export const metadata = {
  title: "NOVAA demo - Home",
};

export default function Home() {
  return (
    <main className="mt-8 flex w-screen flex-col flex-wrap items-center justify-center text-balance p-8">
      <h1 className="mb-8 text-4xl sm:text-5xl">Our Progress</h1>
      <ul className="steps steps-vertical mb-8 lg:steps-horizontal">
        <li className="step step-primary">
          Join <br />
          🤝
        </li>
        <li className="step step-primary">
          Collaborate <br />
          💼
        </li>
        <li className="step">
          create/update <br />
          💡
        </li>
        <li className="step">
          push <br /> ⬆️
        </li>
        <li className="step">
          Review <br />
          🔍
        </li>
        <li className="step">
          Merge <br />
          🔀
        </li>
        <li className="step">
          Deploy <br />
          🚀
        </li>
      </ul>

      <h1 className="mb-8 text-3xl sm:text-5xl">Meet the Team</h1>

      <div className="flex flex-row flex-wrap items-center justify-center gap-8">
        {Team.map((member, idx) => (
          <div
            className={clsx(
              member.class,
              "team-cards card mb-4 flex h-auto w-auto max-w-[42rem] flex-col items-center justify-center border border-slate-800/30 bg-base-100 shadow-xl lg:card-side",
            )}
            key={idx}
          >
            <Image
              src={member.imgURL || Avatar}
              alt="User"
              width={300}
              height={300}
              className="mx-3 my-auto flex max-h-[20rem] w-auto items-center justify-center rounded-xl"
            />

            <div className="card-body flex items-center justify-center text-center">
              <h2 className="card-title">{member.UserName}</h2>
              {member.role.map((role, index) => (
                <div
                  className="role-badge badge badge-success badge-outline"
                  key={index}
                >
                  {role}
                </div>
              ))}

              <p className="flex flex-wrap items-center justify-center text-balance text-center">
                {member.description}
              </p>

              <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                {member.tech.map((tech, index) => (
                  <div
                    className="badge badge-warning badge-outline"
                    key={index}
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="card-actions mt-4 justify-end">
                <Link
                  className="btn btn-primary text-neutral"
                  href={member.path}
                >
                  Visit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
