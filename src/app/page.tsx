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
      <h1 className="mb-8 text-3xl sm:text-5xl">Meet the Team</h1>
      {/* <div className="user-cards flex flex-row flex-wrap items-center justify-center gap-8">
        <div className="card flex max-h-[20rem] w-auto flex-col items-center justify-center bg-base-100 shadow-xl lg:card-side">
          <Image
            src={Avatar}
            alt="User"
            width={500}
            height={500}
            className="mt-6 flex w-[40%] max-w-[15rem] items-center justify-center lg:mt-0"
          />

          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="user-cards flex flex-row flex-wrap items-center justify-center gap-2">
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
              className="mt-6 flex w-[40%] max-w-[15rem] items-center justify-center rounded-xl lg:mt-0"
            />

            <div className="card-body flex items-center text-center justify-center">
              <h2 className="card-title">{member.UserName}</h2>
              <div className="badge badge-success badge-outline">{member.role}</div>
              <p className="flex flex-wrap items-center justify-center text-balance text-center">
                {member.description}
              </p>
              <div className="card-actions justify-end">
                <Link className="btn btn-primary" href={member.path}>
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
