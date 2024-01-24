import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { getCleaners } from '../../api/cleanerData';
import CleanerCard from '../../components/CleanerCard';

export default function SearchPage() {
  const [searchCleaners, setSearchCleaners] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const { searchResult } = router.query;

  const searchAllCleaners = () => {
    getCleaners(user.uid).then((cleaners) => {
      const filteredCleaners = cleaners.filter((cleaner) => cleaner.name.toLowerCase().includes(searchResult));
      setSearchCleaners(filteredCleaners);
    });
  };

  useEffect(() => {
    searchAllCleaners();
    return () => {
      setSearchCleaners([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap">
        {searchCleaners.map((cleaner) => <CleanerCard key={cleaner.firebaseKey} cleanerObj={cleaner} onUpdate={searchAllCleaners} />)}
      </div>
    </>

  );
}
