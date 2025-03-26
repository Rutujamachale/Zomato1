import React from 'react';
import './Blog.css'; 

const Blog = () => {
    return (
        <div>
            <header>
                <img 
                    src="https://b.zmtcdn.com/images/logo/zomato-logo.svg" 
                    alt="Zomato Logo" 
                    className="logo" 
                />
                <nav>
                    <ul>
                        <li><a href="#">All Categories</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Culture</a></li>
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Company</a></li>
                    </ul>
                </nav>
            </header>

            <section className="articles">
                <div className="article">
                    <img 
                        src="https://zomatoblog.com/wp-content/uploads/2025/01/Q3FY25-Blog-cover.png" 
                        alt="Q3FY25 Blog Cover" 
                        className="article-image" 
                    />
                </div>

                <div className="article">
                    <img 
                        src="https://zomatoblog.com/wp-content/uploads/2024/12/Resize-1-1.jpg" 
                        alt="The Big Brand Theory - Carving a spice trail from Tamil Nadu to 5+ countries" 
                        className="article-image" 
                    />
                </div>

                <div className="article">
                    <img 
                        src="https://zomatoblog.com/wp-content/uploads/2024/12/Banner.jpg" 
                        alt="Banner Image" 
                        className="article-image" 
                    />
                </div>

                <div className="article">
                    <img 
                        src="https://zomatoblog.com/wp-content/uploads/2024/12/Blog-Cover.jpg"
                        alt="Blog Cover"
                        className="article-image" 
                    />
                </div>

                <div className="article">
                    <img 
                        src="https://zomatoblog.com/wp-content/uploads/2025/01/Q3FY25-Blog-cover.png" 
                        alt="Q3FY25 Blog Cover" 
                        className="article-image" 
                    />
                </div>

                
            </section>
        </div>
    );
};

export default Blog;
