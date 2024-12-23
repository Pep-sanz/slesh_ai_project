'use client';

import AskSlesh from '@/components/pages/AskSlesh';
import Footer from '@/components/pages/Footer';
import Home from '@/components/pages/Home';
import QuickAction from '@/components/pages/QuickAction';
import ReletedPages from '@/components/pages/ReletedPages';
import SmartSearch from '@/components/pages/SmartSearch';
import WebNavigarion from '@/components/pages/WebNavigation';

export default function Page() {
  return (
    <div>
      <Home />
      <SmartSearch />
      <WebNavigarion />
      <QuickAction />
      <ReletedPages />
      <AskSlesh />
      <Footer />
    </div>
  );
}
