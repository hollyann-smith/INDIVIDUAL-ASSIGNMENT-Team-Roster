import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import getCleaners from '../api/cleanerData';
import CleanerCard from '../components/CleanerCard';

function Home() {
  const [cleaners, setCleaners] = useState([]);
  const { user } = useAuth();
  console.warn('cleaners', cleaners);

  const getAllTheCleaners = () => {
    getCleaners(user.uid).then(setCleaners);
  };

  useEffect(() => {
    getAllTheCleaners();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/cleaner/new" passHref>
        <Button>Add New Member </Button>
      </Link>
      <div className="d-flex flex-wrap">
        {cleaners.map((cleaner) => (
          <CleanerCard key={cleaner.firebaseKey} cleanerObj={cleaner} onUpdate={getAllTheCleaners} />
        ))}
      </div>

    </div>
  );
}

export default Home;
