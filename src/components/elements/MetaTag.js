import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MetaTag = ({ title, description, ogType, ogImage, twImage }) => {
  const router = useRouter()

  return (
    <Head>
          <title>Fiction</title>
          <link rel="icon" href='/favicon.ico' />
          <meta name="robots" content="follow, index" />
          <meta name="description" content='Fiction Singapore 2021' />
          <meta
          name="robots"
          content={
            process.env.NODE_ENV === "production"
              ? "index, follow"
              : "noindex, nofollow"
          }
        />
    </Head>
  )
}

export default MetaTag