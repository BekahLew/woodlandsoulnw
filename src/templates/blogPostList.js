import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import styled from "styled-components";

const Pagination = styled.div`
    display:flex;
    justify-content: flex-end;
`

const PageNumberWrapper = styled.div`
    border: 1px solid #eee;
    justify-content: flex-end;
    margin-right: 5px;
    border-radius: 3px;
    background: ${props => props.isCurrentPage ? '#ba8f45' : '#4d4440'};
`

const PageNumber = styled(Link)`
    display: block;
    padding: .8rem 1rem;
    color: white;
    text-decoration: none;
`

export default ({ pageContext }) => (
    <Layout>
        {pageContext.posts.map(post => (
            <div key={post.node.wordpress_id}>
                <h3 dangerouslySetInnerHTML={{__html: post.node.title}} />
                <small>{post.node.date}</small>
                <p dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
                <div>
                    <Link to={`/post/${post.node.slug}`}>Read More</Link>
                </div>
            </div>
        ))}
        <Pagination>
            {Array.from({length: pageContext.numberOfPages}).map((page, index) => (
                <PageNumberWrapper key={index} isCurrentPage={index + 1 === pageContext.currentPage}>
                    <PageNumber to={index === 0 ? '/blog' : `/blog/${index + 1}`}>
                        {index + 1}
                    </PageNumber>
                </PageNumberWrapper>
            ))}
        </Pagination>
    </Layout>
)