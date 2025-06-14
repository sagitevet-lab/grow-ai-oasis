import React, { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xayrlrpr"; // <-- Use your Formspree endpoint here

const StartNow = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);

    // Prepare form data for Formspree or your API
    const payload = {
      fullName: data.get("fullName"),
      companyName: data.get("companyName"),
      role: data.get("role"),
      email: data.get("email"),
      phone: data.get("phone"),
    };

    try {
      // POST to Formspree (or any email API endpoint you wish)
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form), // Formspree requires form-encoded
      });
      if (res.ok) {
        toast({
          title: "Thank you!",
          description:
            "Your submission was processed. We'll be in touch shortly.",
        });
        setTimeout(() => {
          navigate("/");
        }, 1200);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong submitting your form. Please try again.",
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request.",
      });
    }
  };

  return (
    <div className="min-h-[80vh] bg-green-50 flex flex-col justify-center items-center pt-32 pb-20 px-2">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-green-100 px-6 py-10">
        <h2 className="text-3xl font-bold text-green-800 mb-2 text-center">
          Start Now
        </h2>
        <p className="mb-7 text-green-900 text-base font-medium text-center">
          Please fill in your details and we’ll get in touch!
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="fullName"
              className="block mb-1 font-semibold text-green-800"
            >
              Full Name
            </label>
            <Input type="text" id="fullName" name="fullName" required autoComplete="name" />
          </div>
          <div>
            <label
              htmlFor="companyName"
              className="block mb-1 font-semibold text-green-800"
            >
              Company Name
            </label>
            <Input type="text" id="companyName" name="companyName" required />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block mb-1 font-semibold text-green-800"
            >
              Role
            </label>
            <Input type="text" id="role" name="role" required />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-semibold text-green-800"
            >
              Email
            </label>
            <Input type="email" id="email" name="email" required autoComplete="email" />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-1 font-semibold text-green-800"
            >
              Phone Number
            </label>
            <Input type="tel" id="phone" name="phone" required />
          </div>
          <Button className="w-full bg-green-700 text-white font-bold text-lg hover:bg-green-900 mt-3" type="submit">
            Submit
          </Button>
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-gray-500 underline hover:text-gray-700 text-base transition"
            >
              Back to website
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StartNow;
