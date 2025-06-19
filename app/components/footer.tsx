

"use client";

import { useState, useEffect, FormEvent } from "react";
import { IconMail } from '@tabler/icons-react';
import { GridWrapper } from "./GridWrapper";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";

export default function Footer() {
  const pathname = usePathname();
  // inside your Footer component:
  const [localTime, setLocalTime] = useState("");


  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      };
      const timeString = now.toLocaleTimeString("en-US", options);
      setLocalTime(`${timeString} GMT+5:30`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // update every 1 min
    return () => clearInterval(interval);
  }, []);

  const [formState, setFormState] = useState({
    email: "",
    message: "",
    isSuccess: false,
    isLoading: false,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState((prev) => ({
      ...prev,
      message: "",
      isSuccess: false,
      isLoading: true,
    }));

    if (!formState.email) {
      setFormState((prev) => ({
        ...prev,
        message: "Please provide an email address.",
        isLoading: false,
      }));
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormState({
        email: "",
        message: "You're signed up!",
        isSuccess: true,
        isLoading: false,
      });
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        message: "Something went wrong. Please try again.",
        isSuccess: false,
        isLoading: false,
      }));
    }
  };

  return (
    <div 
      className="relative"
    >
      <GridWrapper>
        <div className="relative">
          <div className="drama-shadow  bg-palette-1/20 text-palette-2/70 p-10 md:p-[100px]">
            {/* Borders */}
            <div className="absolute left-0 right-0 top-[34px] z-10 h-px w-full bg-palette-1 md:top-[48px]" />
            <div className="absolute bottom-0 right-[34px] top-0 z-10 w-px bg-palette-1 md:right-[48px]" />
            <div className="absolute bottom-[34px] left-0 right-0 z-10 h-px w-full bg-palette-1 md:bottom-[48px]" />
            <div className="absolute bottom-0 left-[34px] top-0 z-10 w-px bg-palette-1 md:left-[48px]" />

            {/* Crosses */}
            <div className="absolute right-[44.5px] top-[48px] z-20 hidden h-px w-2 bg-palette-2 md:block" />
            <div className="absolute right-[48px] top-[44.5px] z-20 hidden h-2 w-px bg-palette-2 md:block" />
            <div className="absolute left-[44.5px] top-[48px] z-20 hidden h-px w-2 bg-palette-2 md:block" />
            <div className="absolute left-[48px] top-[44.5px] z-20 hidden h-2 w-px bg-palette-2 md:block" />
            <div className="absolute bottom-[48px] left-[44.5px] z-20 hidden h-px w-2 bg-palette-2 md:block" />
            <div className="absolute bottom-[44.5px] left-[48px] z-20 hidden h-2 w-px bg-palette-2 md:block" />
            <div className="absolute bottom-[48px] right-[44.5px] z-20 hidden h-px w-2 bg-palette-2 md:block" />
            <div className="absolute bottom-[44.5px] right-[48px] z-20 hidden h-2 w-px bg-palette-2 md:block" />

            {/* Content */}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-3xl font-medium text-palette-2">
                Subscribe to my newsletter
              </h2>
              <p className="mb-8 text-base leading-8 text-palette-3">
                Get occasional updates about new content, projects, and more.
              </p>

              <form
                onSubmit={handleSubmit}
                className="relative flex flex-col sm:flex-row justify-center items-center gap-3 mb-6"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="w-full sm:w-[360px] rounded-full border border-palette-1 bg-transparent px-5 py-3 text-palette-2 placeholder-palette-2 focus:outline-none focus:ring-2 focus:ring-palette-4"
                  disabled={formState.isLoading}
                />
                <button
                  type="submit"
                  className="rounded-full bg-palette-4 px-6 py-3 text-primary font-medium hover:opacity-90 transition"
                  disabled={formState.isLoading}
                >
                  {formState.isLoading ? "Loading..." : "Subscribe"}
                </button>
              </form>

              {formState.message && (
                <p
                  className={`text-sm ${formState.isSuccess ? "text-palette-4" : "text-rose-400"
                    }`}
                >
                  {formState.message}
                </p>
              )}

              <p className="mt-6 text-base text-palette-3">
                <span className="font-bold text-palette-2">NO SPAM.</span> You can unsubscribe at any time.
              </p>

              {/* Footer bottom */}
              {/* <div className="mt-10 border-t border-palette-1 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-palette-3">
                <p>© 2025 Rahul Jangir. All rights reserved.</p>
                <a
                  href="mailto:rahuljangir.works@gmail.com"
                  className="flex items-center space-x-2 hover:text-palette-4 transition mt-3 md:mt-0"
                >
                  <Mail className="w-4 md:w-5" />
                  <span>Email me</span>
                </a>
              </div> */}

              {/* Footer bottom */}
              <div className="mt-10 border-t border-palette-1 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-palette-3 gap-3">
                <div className="flex flex-col sm:flex-row sm:divide-x divide-palette-1 text-center sm:text-left">
                  <p className="px-3">Version 1.0</p>
                  <p className="px-3">2025© Edition</p>
                  <p className="px-3">Local time: {localTime} (Kolkata)</p>
                </div>

                <a
                  href="mailto:rahuljangir.works@gmail.com"
                  className="flex items-center space-x-2 hover:text-palette-4 transition"
                >
                  <IconMail className="w-4 md:w-5" />
                  <span>Email me</span>
                </a>
              </div>


            </div>
          </div>
        </div>
      </GridWrapper>
    </div>
  );
}
