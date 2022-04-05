import { ScrollToIDHome } from '@/redux/actions/ficActions';
import { useContext, useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import { Sec10Home, Sec1Home, Sec2Home, Sec3Home, Sec4Home, Sec5Home, Sec6Home, Sec7Home, Sec8Home, Sec9Home } from 'src/components/home-sections';

const Home = () => {
  const reducers = useSelector((state) => state.FicReducers)
  const dispatch = useDispatch()
 const router = useRouter()

  useEffect(() => {
    if (reducers.DataScrollToSec) {
      console.log({reducers})
      const element = document.getElementById(reducers.DataScrollToSec.id);
      if (element) {
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - (reducers.DataScrollToSec?.offset || 0);
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        dispatch(ScrollToIDHome(null))
      }

    }

  }, [reducers.DataScrollToSec, router.pathname])

  return (
    <div className='home'>
      <Sec1Home />
      <Sec2Home />
      <Sec3Home />
      <Sec4Home />
      <Sec5Home />
      <Sec6Home />
      <Sec7Home />
      <Sec8Home />
      <Sec9Home />
      <Sec10Home />
    </div>
  )
}

export default Home
