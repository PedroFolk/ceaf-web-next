import { useEffect } from "react";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/clientApp";
import Image from "next/image";
import github from "../../img/github-mark/github-mark-white.png"
import githubtext from "../../img/GitHub-Logos/GitHub_Logo_White.png"

const auth = getAuth(app);
const provider = new GithubAuthProvider();
var logado = false;
const user = auth.currentUser;
const username = "";

const SignInScreen = () => {

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      // Redirect to home page on successful sign-in



      if (user) {

        const username = user.displayName;
        console.log(username);
        window.location.href = "/user";
        logado = true;
        // do something with the username variable here
      } else {
        // handle the case where user is null
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Check if the user is already signed in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const username = user.displayName;
        console.log(username);

        // Redirect to home page if the user is signed in

        window.location.href = "/user";
      }
    });

    // Unsubscribe from the auth state observer when component unmounts
    return unsubscribe;
  }, []);

  return (
    <div className="flex flex-col h-screen text-center items-center justify-center ">
      <div className=" shadow-2xl bg-mauaBlue p-2 text-white rounded-xl">
        <button className="flex items-center border-2 rounded-xl px-2 py-1" onClick={handleSignIn}>
          <Image src={github} alt={"GitHubIcon"} className="h-16 w-auto p-3" />
          <Image src={githubtext} alt={"GitHubText"} className="h-16 w-auto p-3" />

        </button>
      </div>
    </div>
  );
};

export const displayName = user ? user.displayName : null;

export const getLogado = () => logado;
export default SignInScreen;
