import { useEffect } from "react";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/clientApp";
import Image from "next/image";
import github from "../../img/github-mark/github-mark-white.png"
import githubtext from "../../img/GitHub-Logos/GitHub_Logo_White.png"

const auth = getAuth(app);
const provider = new GithubAuthProvider();
var logado = false;

const SignInScreen = () => {

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      // Redirect to home page on successful sign-in
      

      window.location.href = "/";
      logado = true;
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Check if the user is already signed in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Redirect to home page if the user is signed in
        window.location.href = "/";
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

export const getLogado = () => logado;
export default SignInScreen;
