import { useEffect, useState } from "react";
import { FcSurvey } from "react-icons/fc";
import SopForm from "@/app/components/sopform";
import { getSession, signOut } from "@/app/auth/auth";
import "tailwindcss/tailwind.css";

interface Session {
  user: {
    aud: string;
  };
}

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState("item1");
  const [showSOPInputs, setShowSOPInputs] = useState(false);
  const [currentSession, setSession] = useState<Session | null>();

  const handleSignout = async () => {
    await signOut();
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const session = await getSession();
        if (session && session.user) {
          setSession(session);
          console.log(session.user.aud);
        } else {
          console.log("user is not authenticated");
        }
      } catch (err) {
        console.log("error fetching user session:", err);
      }
    };
    fetchUser();
  }, []);

  const handleSidebarItemClick = (item: string) => {
    setSelectedItem(item);
    setShowSOPInputs(false);
  };

  const handleFileUploadClick = () => {
    setShowSOPInputs((prevShowSOPInputs) => !prevShowSOPInputs);
  };

  return (
    <>
      {currentSession && currentSession.user?.aud && (
        <div className="flex bg-deepBlue max-h-full w-screen">
          <div className="lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-64 items-start min-h-full bg-base-200 text-base-content">
                <li className="py-6 sm:text-xl">
                  <a onClick={() => handleSidebarItemClick("item1")}>Home</a>
                </li>
                <li className="py-6 sm:text-xl">
                  <a onClick={() => handleSidebarItemClick("item2")}>
                    Template
                  </a>
                  {/* item 2 */}
                </li>
                <li className="py-6 sm:text-xl">
                  <a onClick={() => handleSidebarItemClick("item3")}>
                    Sidebar Item 3
                  </a>
                </li>
                <div className="mt-auto">
                  <li className="pt-6 pb-4 text-sm sm:text-lg">
                    <a
                      onClick={() =>
                        (window.location.href =
                          "https://billing.stripe.com/p/login/test_8wMdT4d8gbanch28ww")
                      }
                    >
                      Edit Subscription
                    </a>
                  </li>
                  <li className="pb-6 text-sm sm:text-lg">
                    <a onClick={handleSignout}>Sign Out</a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="flex p-10 w-screen flex-col items-start h-full">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button md:hidden self-end justify-end"
            >
              Open drawer
            </label>

            {selectedItem === "item1" && (
              <div>
                <h1 className="text-white text-xl sm:text-4xl font-semibold tracking-wide mb-1 sm:mb-2">
                  Current documents
                </h1>
                <div className="mb-6 sm:mb-10 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">
                  {/* EACH GET DOCUMENT */}
                  {/* Has a watermark that says powered by StayFirm.io */}
                </div>
              </div>
            )}
            {selectedItem === "item2" && (
              <div className="w-full h-full">
                <FcSurvey
                  onClick={handleFileUploadClick}
                  className=""
                  size={80}
                />
                {!showSOPInputs && (
                  <div className="w-full">
                    <SopForm />
                  </div>
                )}
              </div>
            )}
            {selectedItem === "item3" &&
              "sm:text-4xl text-white text-xl font-semibold tracking-wide mb-1 sm:mb-2" && (
                <div>
                  <h1 className="text-white">Item 3</h1>
                </div>
              )}
            {selectedItem ===
              "sm:text-4xl text-white text-xl font-semibold tracking-wide mb-1 sm:mb-2 self-end" && (
              <div>
                <h1 className="text-white">Signout page?</h1>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
