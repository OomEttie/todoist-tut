import React from 'react'
import { Sidebar } from './sidebar'
import { Tasks } from '../tasks'

export const Content = () => (
  <section className="content">
    <Sidebar />
    <Tasks />
  </section>
)
