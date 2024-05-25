import Image from "next/image";
import Avatar from "./../assets/images/profile-pic-placeholder.png";

export const metadata = {
  title: "NOVAA demo - Home",
};

export default function Home() {
  return (
    <main className="mt-8 flex min-h-[70vh] w-screen flex-col flex-wrap items-center justify-center text-balance">
      <h1>This is the Home</h1>
      <div className="user-cards flex flex-row items-center justify-between">
        <div className="card min-h-[25rem] bg-base-100 shadow-xl lg:card-side">
          <figure>
            <Image src={Avatar} alt="User" width={100} height={300} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>

        <div className="card min-h-[25rem] bg-base-100 shadow-xl lg:card-side">
          <figure>
            <Image src={Avatar} alt="User" width={100} height={300} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>

        <div className="card min-h-[25rem] bg-base-100 shadow-xl lg:card-side">
          <figure>
            <Image src={Avatar} alt="User" width={100} height={300} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
