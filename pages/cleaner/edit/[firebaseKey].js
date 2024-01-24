import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CleanerForm from '../../../components/forms/CleanerForm';
import { getSingleCleaner } from '../../../api/cleanerData';

export default function EditCleaner() {
  const [editCleaner, setCleanerEdit] = useState();
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleCleaner(firebaseKey).then(setCleanerEdit);
  }, [firebaseKey]);

  return (<CleanerForm obj={editCleaner} />);
}
