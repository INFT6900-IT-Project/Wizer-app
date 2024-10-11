// !function() {
//     "use strict";
//     function e(e) {
//         try {
//             if ("undefined" == typeof console)
//                 return;
//             "error"in console ? console.error(e) : console.log(e)
//         } catch (e) {}
//     }
//     function t(e) {
//         return d.innerHTML = '<a href="' + e.replace(/"/g, "&quot;") + '"></a>',
//         d.childNodes[0].getAttribute("href") || ""
//     }
//     function r(e, t) {
//         var r = e.substr(t, 2);
//         return parseInt(r, 16)
//     }
//     function n(n, c) {
//         for (var o = "", a = r(n, c), i = c + 2; i < n.length; i += 2) {
//             var l = r(n, i) ^ a;
//             o += String.fromCharCode(l)
//         }
//         try {
//             o = decodeURIComponent(escape(o))
//         } catch (u) {
//             e(u)
//         }
//         return t(o)
//     }
//     function c(t) {
//         for (var r = t.querySelectorAll("a"), c = 0; c < r.length; c++)
//             try {
//                 var o = r[c]
//                   , a = o.href.indexOf(l);
//                 a > -1 && (o.href = "mailto:" + n(o.href, a + l.length))
//             } catch (i) {
//                 e(i)
//             }
//     }
//     function o(t) {
//         for (var r = t.querySelectorAll(u), c = 0; c < r.length; c++)
//             try {
//                 var o = r[c]
//                   , a = o.parentNode
//                   , i = o.getAttribute(f);
//                 if (i) {
//                     var l = n(i, 0)
//                       , d = document.createTextNode(l);
//                     a.replaceChild(d, o)
//                 }
//             } catch (h) {
//                 e(h)
//             }
//     }
//     function a(t) {
//         for (var r = t.querySelectorAll("template"), n = 0; n < r.length; n++)
//             try {
//                 i(r[n].content)
//             } catch (c) {
//                 e(c)
//             }
//     }
//     function i(t) {
//         try {
//             c(t),
//             o(t),
//             a(t)
//         } catch (r) {
//             e(r)
//         }
//     }
//     var l = "/cdn-cgi/l/email-protection#"
//       , u = ".__cf_email__"
//       , f = "data-cfemail"
//       , d = document.createElement("div");
//     i(document),
//     function() {
//         var e = document.currentScript || document.scripts[document.scripts.length - 1];
//         e.parentNode.removeChild(e)
//     }()
// }();

import React, { useState } from 'react';
import './Courses.css';


import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Courses() {
    // Mock course data
    const [courses] = useState([
        {
            id: 1,
            image: courseImage1,
            category: 'Photography',
            title: 'Create An LMS Website With LearnPress',
            duration: '2 Weeks',
            students: 156,
            level: 'All levels',
            lessons: 20,
            price: 'Free',
        },
        {
            id: 2,
            image: courseImage2,
            category: 'Photography',
            title: 'Amazing Themes by Thimpress',
            duration: '2 Weeks',
            students: 156,
            level: 'All levels',
            lessons: 20,
            price: 'Free',
        },
        // Add more course objects here...
    ]);

    return (
        <div className="courses-page">
            <h1>All Courses</h1>
            <div className="search-bar">
                <input type="text" placeholder="Search for a course..." />
                <button><i className="fa fa-search"></i></button>
            </div>
            <div className="courses-grid">
                {courses.map((course) => (
                    <div className="course-card" key={course.id}>
                        <img src={course.image} alt={course.title} />
                        <div className="course-info">
                            <p className="course-category">{course.category}</p>
                            <h3>{course.title}</h3>
                            <div className="course-meta">
                                <span>{course.duration}</span>
                                <span>{course.students} Students</span>
                                <span>{course.level}</span>
                                <span>{course.lessons} Lessons</span>
                            </div>
                            <div className="course-footer">
                                <span className="course-price">{course.price}</span>
                                <button className="view-more-btn">View More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <span className="page-number active">1</span>
                <span className="page-number">2</span>
                <span className="page-number">3</span>
            </div>
        </div>
    );
}

export default Courses;
