'use client';

/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { useUser } from '@/context/UserContext';
import { Mail, Shield, Github, Linkedin, Globe } from 'lucide-react';

const MyProfile = () => {
  const { user } = useUser();

  return (
    <div className="flex justify-center px-4 sm:px-0 py-10">
      <div
        className="
          relative w-full max-w-md
          rounded-3xl
          border border-white/10
          bg-white/70 dark:bg-gray-900/60
          backdrop-blur-xl
          shadow-2xl
          overflow-hidden
        "
      >
        {/* Header Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#029fae]/10 via-transparent to-purple-500/10" />

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 flex flex-col items-center text-center">

          {/* Avatar */}
          <div className="relative">
            <img
              src={user?.image}
              alt="Profile"
              className="
                w-24 h-24 sm:w-28 sm:h-28
                rounded-full object-cover
                ring-4 ring-[#029fae]/30
                shadow-lg
              "
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-2xl font-bold text-[#272343] dark:text-white">
            {user?.name}
          </h2>

          {/* Role */}
          <div className="flex items-center gap-2 mt-1 text-[#029fae] text-sm font-medium">
            <Shield className="h-4 w-4" />
            Software Developer
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 mt-2 text-muted-foreground text-sm">
            <Mail className="h-4 w-4" />
            {user?.email}
          </div>

          {/* Bio */}
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed px-2">
            Passionate about clean code, scalable systems, and building modern
            web applications with elegant UI and strong architecture.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-6 text-[#029fae]">
            <a href="#" className="hover:scale-110 transition">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <Globe className="h-5 w-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 w-full">
            <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-3">
              <p className="text-lg font-bold text-[#272343]">12</p>
              <p className="text-xs text-muted-foreground">Orders</p>
            </div>

            <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-3">
              <p className="text-lg font-bold text-[#272343]">5</p>
              <p className="text-xs text-muted-foreground">Reviews</p>
            </div>

            <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-3">
              <p className="text-lg font-bold text-[#272343]">1</p>
              <p className="text-xs text-muted-foreground">Role</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;