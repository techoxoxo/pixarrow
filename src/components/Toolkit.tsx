"use client";

import React from "react";

const stack = [
  // ROW 1
  [
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  ],
  // ROW 2
  [
    { name: "WooCommerce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
    { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/96bf48" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ],
  // ROW 3
  [
    { name: "DigitalOcean", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Claude AI", logo: "https://cdn.simpleicons.org/anthropic" },
    { name: "Gemini", logo: "https://cdn.simpleicons.org/googlegemini" },
  ]
];

export default function Toolkit() {
  return (
    <section className="pixarrow-stack-section -mx-6 md:-mx-20 lg:-mx-32 bg-transparent py-10 lg:py-20 flex justify-center overflow-hidden relative">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-purple/10 blur-[150px] rounded-full pointer-events-none" />

      <style jsx>{`
        .hive {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: fit-content;
        }
        .hive-row {
          display: flex;
        }
        .hive-row:nth-child(even) {
          margin-left: 78px;
        }
        .hive-row:not(:first-child) {
          margin-top: -46px;
        }
        .cell {
          position: relative;
          width: 156px;
          height: 180px;
          flex-shrink: 0;
          cursor: pointer;
          transition: transform .22s ease, filter .22s ease;
        }
        .cell:hover {
          transform: scale(1.07);
          z-index: 10;
          filter: drop-shadow(0 0 25px rgba(124,58,237,0.45));
        }
        .cell::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 156 180'%3E%3Cpolygon points='78,1 155,41 155,139 78,179 1,139 1,41' fill='%230e0524' stroke='rgba(255,255,255,0.08)' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat center/100% 100%;
          transition: background .22s ease;
        }
        .cell:hover::before {
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 156 180'%3E%3Cpolygon points='78,1 155,41 155,139 78,179 1,139 1,41' fill='%23170a38' stroke='rgba(124,58,237,0.5)' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat center/100% 100%;
        }
        .cell-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 9px;
        }
        .cell-content img {
          width: 48px;
          height: 48px;
          object-fit: contain;
          filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5));
        }
        .label {
          font-size: 11.5px;
          font-weight: 700;
          color: #ffffff;
          opacity: 0.8;
          text-align: center;
          line-height: 1.3;
          font-family: 'DM Sans', sans-serif;
        }
        .cell:hover .label {
          opacity: 1;
          color: #A855F7;
        }
        @media (max-width: 1024px) {
           .hive {
             transform: scale(0.85);
           }
        }
        @media (max-width: 768px) {
          .hive {
             transform: scale(0.65);
             margin-top: -50px;
          }
           .hive-row:nth-child(even) {
             margin-left: 78px;
           }
        }
        @media (max-width: 480px) {
          .hive {
             transform: scale(0.45);
             margin-top: -100px;
             margin-bottom: -100px;
          }
        }
      `}</style>
      
      <div className="flex flex-col items-center relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 italic">
             Our Technology <span className="text-gradient">Stack</span>
           </h2>
           <p className="text-white/40 font-bold tracking-widest uppercase text-[10px]">Built for Scale &amp; Performance</p>
        </div>

        <div className="hive">
          {stack.map((row, i) => (
            <div key={i} className="hive-row gap-0">
              {row.map((item) => (
                <div key={item.name} className="cell">
                  <div className="cell-content">
                    <img src={item.logo} alt={item.name} loading="lazy" />
                    <span className="label uppercase tracking-wider">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
