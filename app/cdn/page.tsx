/* eslint-disable @next/next/no-sync-scripts */
"use client";

import { useEffect } from "react";

export default function CdnDemo() {
  useEffect(() => {
    const axios = window.axios;
    console.log(axios);
  }, []);

  return (
    <div>
      <h1>CDN Demo</h1>
    </div>
  );
}
