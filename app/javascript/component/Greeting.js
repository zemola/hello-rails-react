import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../Redux/greetingSlice';

export default function Greeting() {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greeting);
  React.useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      Greeting:
      {greeting}
    </div>
  );
}