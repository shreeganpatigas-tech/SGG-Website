import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Eye, Users } from "lucide-react";

/**
 * Simple localStorage-based visitor counter.
 * Tracks daily + all-time unique visits using a date key.
 * No backend required — all data persists in the user's browser.
 */
function useVisitorCount() {
  const [today, setToday] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const STORAGE_KEY = "sgg_visitor_data";
    const todayKey = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const data = raw ? JSON.parse(raw) : { days: {}, total: 0 };

      // Increment total
      data.total = (data.total || 0) + 1;

      // Increment today
      if (!data.days[todayKey]) data.days[todayKey] = 0;
      data.days[todayKey] += 1;

      // Clean entries older than 30 days
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - 30);
      for (const key of Object.keys(data.days)) {
        if (key < cutoff.toISOString().slice(0, 10)) delete data.days[key];
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

      setToday(data.days[todayKey]);
      setTotal(data.total);
    } catch {
      setToday(1);
      setTotal(1);
    }
  }, []);

  return { today, total };
}

function CountUp({ value }: { value: number }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (value <= 0) return;
    const duration = 1500;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value).toLocaleString());
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [value]);

  return <span>{display}</span>;
}

export default function VisitorCounter() {
  const { today, total } = useVisitorCount();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="inline-flex items-center gap-4 glass-card rounded-full px-5 py-2.5 text-sm"
    >
      <div className="flex items-center gap-2 text-white/70">
        <Eye className="w-3.5 h-3.5 text-primary" />
        <span>
          Today: <span className="text-white font-semibold"><CountUp value={today} /></span>
        </span>
      </div>
      <div className="w-px h-4 bg-white/15" />
      <div className="flex items-center gap-2 text-white/70">
        <Users className="w-3.5 h-3.5 text-accent" />
        <span>
          Total: <span className="text-white font-semibold"><CountUp value={total} /></span>
        </span>
      </div>
    </motion.div>
  );
}
