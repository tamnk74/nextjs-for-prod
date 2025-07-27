'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

export default function Home() {
  return (
    <div className="w-full">
      <FullCalendar
        viewClassNames={['w-full', 'bg-white', 'dark:bg-black']}
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={[
          { title: 'event 1', date: '2025-04-20' },
          { title: 'event 2', date: '2025-04-22' },
        ]}
      />
    </div>
  );
}
