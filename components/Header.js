import Image from 'next/image';
import React from 'react';
import Headeritem from './HeaderItem';
import {
  HomeIcon,
  CollectionIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';

export default function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <Headeritem title='HOME' Icon={HomeIcon} />
        <Headeritem
          title='TRENDING'
          Icon={CollectionIcon}
        />
        <Headeritem
          title='VERIFIED'
          Icon={BadgeCheckIcon}
        />
        <Headeritem
          title='COLLECTIONS'
          Icon={LightningBoltIcon}
        />
        <Headeritem title='SEARCH' Icon={SearchIcon} />
        <Headeritem title='ACCOUNT' Icon={UserIcon} />
      </div>
      <Image
        className='object-contain'
        src='/Hulu_logo.svg'
        width={120}
        height={60}
        alt='logo'
      />
    </header>
  );
}
