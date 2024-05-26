import Image from "next/image";
import Avatar from "./../assets/images/profile-pic-placeholder.png";
import { Team } from "@/components/lib/Team";
import Link from "next/link";

export const metadata = {
  title: "NOVAA demo - Home",
};

export default function Home() {
  return (
    <main className="mt-8 flex w-screen flex-col flex-wrap items-center justify-center text-balance p-8">
      <h1 className="mb-8 text-4xl sm:text-5xl">Our Progress</h1>
      <ul className="steps steps-vertical mb-8 lg:steps-horizontal">
        <li className="step step-primary">Join</li>
        <li className="step step-primary">Collaborate</li>
        <li className="step">create/update</li>
        <li className="step">push</li>
        <li className="step">Review</li>
        <li className="step">Deploy</li>
      </ul>

      <h1 className="mb-8 text-3xl sm:text-5xl">Meet the Team</h1>

      <div className="user-cards flex flex-row flex-wrap items-center justify-center gap-4">
        {Team.map((member, idx) => (
          <div
            className="card mb-4 flex h-auto w-auto max-w-[42rem] flex-col items-center justify-center bg-base-100 shadow-xl lg:card-side"
            key={idx}
          >
            <Image
              src={Avatar}
              alt="User"
              width={500}
              height={500}
              className="mt-6 flex w-[40%] max-w-[14rem] items-center justify-center rounded-xl lg:mt-0"
            />

            <div className="card-body flex items-center justify-center text-center">
              <h2 className="card-title">{member.UserName}</h2>
              {member.role.map((role, index) => (
                <div className="badge badge-success badge-outline" key={index}>
                  {role}
                </div>
              ))}

              <p className="flex flex-wrap items-center justify-center text-balance text-center">
                {member.description}
              </p>
              <div className="card-actions mb-2 justify-end">
                <Link className="btn btn-primary" href={member.path}>
                  Visit
                </Link>
              </div>
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
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
