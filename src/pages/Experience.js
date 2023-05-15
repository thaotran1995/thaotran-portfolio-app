import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
function Experience() {
  return (
    <div className='experience'> 
      <VerticalTimeline lineColor='#33497a'>
        <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='2013-2017'
            iconStyle={{background: '#33497a', color:'#fff'}}
            icon={<SchoolIcon/>}
        >
            <h3 className='vertical-timeline-element-title'>
                Study Finance & Banking, Ho CHi Minh City, VietNam
            </h3>
            <p>University Of Economic HCM City - UEH</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
            className='vertical-timeline-element--work'
            date='2018-2020'
            iconStyle={{background: '#53b015', color:'#fff'}}
            icon={<WorkIcon/>}
        >
            <h3 className='vertical-timeline-element-title'>
                Customer Service - Finance & Banking, Ho CHi Minh City, VietNam
            </h3>
            <p>Cashwagon Company</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='2019-2022'
            iconStyle={{background: '#33497a', color:'#fff'}}
            icon={<SchoolIcon/>}
        >
            <h3 className='vertical-timeline-element-title'>
                Study Information Technology, Ho CHi Minh City, VietNam
            </h3>
            <p>University Of Science HCM City - UEH</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='2022-2023'
            iconStyle={{background: '#53b015', color:'#fff'}}
            icon={<WorkIcon/>}
        >
            <h3 className='vertical-timeline-element-title'>
                Working as Developer, Ho CHi Minh City, VietNam
            </h3>
            <p>FPT Software</p>
        </VerticalTimelineElement>
       
      </VerticalTimeline>
    </div>
  )
}

export default Experience
