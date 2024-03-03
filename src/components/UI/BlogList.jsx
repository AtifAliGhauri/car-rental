import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import blogData from '../../assets/data/blogData'
import '../../styles/blog-item.css'

const BlogList = () => {
  return (
  <>
    {
        blogData.map((item) => (
            <BlogItem item={item} key={item.id}  />
        ))
    }
  </>
  )
}

const BlogItem = ({item}) =>{

    const {imgUrl, title, author, date, description, time} = item;

    return <Col lg='4' md='4' sm='6' className='mb-5'>
            <div className='blog__item'>
                <img src={imgUrl} alt='' className='w-100' />
                <div className='blog__info p-3'>
                    <Link to={`/blogs/${title}`} className='blog__title'>{title}</Link>
                    <p className='section__description pt-3'>
                        {
                            description.length > 100 ? description.substr(0,100) : description
                        }
                    </p>
                    <Link to={`/blogs/${title}`} className='read__more'>Read more</Link>

                    <div className='blog__time pt-3 mt-3 d-flex align-items-center justify-content-between'>
                        <span className='blog__author'>
                            <i className='ri-user-line'></i>{author}
                        </span>

                        <div className='d-flex align-items-center gap-3'>
                            <span className='d-flex align-items-center gap-1 section__description'>
                            <i class="ri-calendar-line"></i>{date}
                            </span>

                            <span className='d-flex align-items-center gap-1 section__description'>
                                <i className='ri-time-line'></i>{time}
                            </span>
                        </div>

                    </div>

                </div>
            </div>

    </Col>
}

export default BlogList