'use client';
import { useState } from 'react';
import { toast } from 'sonner';

export function FlashMessageClient(props: { flash: string[] | undefined }) {
  const recentlyFlashed: number[] = [];
  const [flashed, setFlashed] = useState<number[]>([]);
  if (!!props.flash && props.flash.length) {
    for (const flash of props.flash) {
      const { type, message, timestamp } = JSON.parse(flash);
      if (flashed.includes(timestamp)) {
        return null;
      }
      if (type === 'success') {
        toast.success(message);
      } else if (type === 'error') {
        toast.error(message);
      }
      recentlyFlashed.push(timestamp);
      setFlashed(recentlyFlashed);
    }
  }

  return null;
}
