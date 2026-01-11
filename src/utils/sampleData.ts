export function initializeSampleData() {
  // Only initialize if data doesn't exist
  if (!localStorage.getItem('dataInitialized')) {
    const sampleProjects = [
      {
        id: '1',
        title: 'Oclicon E-Commerce Platform',
        description: 'A full-featured e-commerce website with shopping cart, payment integration, and admin dashboard.',
        fullDescription: `Oclicon is a modern e-commerce platform built to provide seamless online shopping experiences. The platform features a complete shopping cart system, secure payment processing, product catalog management, and an intuitive admin dashboard for managing inventory and orders.

Key Features:
• Responsive product catalog with advanced filtering and search
• Secure checkout process with multiple payment options
• Real-time inventory management
• Customer authentication and profile management
• Order tracking and history
• Admin dashboard for managing products, orders, and customers
• Email notifications for order updates

The platform was built with scalability in mind, utilizing modern web technologies to ensure fast load times and smooth user interactions. The admin panel provides comprehensive analytics and reporting tools to help business owners make data-driven decisions.`,
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS', 'JWT'],
        image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzY0Mzg0ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/oclicon'
      },
      {
        id: '2',
        title: 'Reddit Clone Social Platform',
        description: 'A Reddit-style social platform with posts, comments, voting system, and community features.',
        fullDescription: `A fully functional Reddit-style social platform that enables users to create communities, share content, and engage in discussions. The platform implements core Reddit features including upvoting/downvoting, nested comments, user karma, and community moderation.

Key Features:
• User authentication and profile customization
• Create and join communities (subreddits)
• Post text, images, and links
• Upvote/downvote system with karma tracking
• Nested comment threads with real-time updates
• Community moderation tools
• Hot, New, Top, and Controversial sorting algorithms
• Search functionality across posts and communities
• Dark/light mode toggle

Built with a focus on performance and user experience, the platform handles real-time interactions efficiently and scales to support growing communities. The moderation system provides community leaders with the tools they need to maintain healthy discussions.`,
        technologies: ['React', 'Django', 'Python', 'PostgreSQL', 'Redis', 'WebSocket', 'Bootstrap'],
        image: 'https://images.unsplash.com/photo-1710870509663-16f20f75d758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQ0MTE5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/reddit-clone'
      },
      {
        id: '3',
        title: 'Def Fingaz Music Production Website',
        description: 'Professional music producer portfolio with beat store, audio player, and booking system.',
        fullDescription: `Def Fingaz is a sleek, professional website designed for music producers to showcase their work and sell beats online. The site features an integrated audio player, secure payment processing for beat purchases, and a booking system for studio sessions.

Key Features:
• Custom audio player with playlist functionality
• Beat store with instant download delivery
• License selection and secure checkout
• Producer portfolio and discography
• Booking system for studio sessions
• Client testimonials and social proof
• Integration with streaming platforms
• Newsletter signup for updates
• Mobile-responsive design optimized for audio playback

The website emphasizes the producer's brand while providing a seamless experience for purchasing and licensing beats. The audio player is optimized for quick loading and smooth playback across all devices.`,
        technologies: ['React', 'Node.js', 'Express', 'Stripe', 'AWS S3', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY0Mjk2ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/def-fingaz'
      },
      {
        id: '4',
        title: 'Creative Agency Landing Page',
        description: 'Modern, animated landing page for a digital agency with portfolio showcase and contact forms.',
        fullDescription: `A stunning landing page for a creative digital agency, featuring smooth animations, an interactive portfolio showcase, and conversion-optimized contact forms. The design focuses on creating a strong first impression while effectively communicating the agency's value proposition.

Key Features:
• Smooth scroll animations and parallax effects
• Interactive portfolio grid with case studies
• Service offerings with detailed descriptions
• Team member profiles and expertise
• Client testimonials and success stories
• Multi-step contact form with validation
• Newsletter subscription integration
• Performance optimized for fast loading
• Fully responsive across all devices

The landing page is built with conversion in mind, strategically placing call-to-action buttons and using persuasive copy to guide visitors through the customer journey. All animations are performance-optimized to maintain a smooth 60fps experience.`,
        technologies: ['React', 'Tailwind CSS', 'Motion', 'jQuery'],
        image: 'https://images.unsplash.com/photo-1560452895-7d709050768f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ2VuY3klMjB3ZWJzaXRlfGVufDF8fHx8MTc2NDQxMTk3MHww&ixlib=rb-4.1.0&q=80&w=1080',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/agency-landing'
      },
      {
        id: '5',
        title: 'Streamer Chat Application',
        description: 'Real-time chat application built with Flutter for streamers and their communities.',
        fullDescription: `A real-time chat application designed specifically for streamers and their communities, built using Flutter for cross-platform compatibility. The app features emoji support, moderation tools, and integration with popular streaming platforms.

Key Features:
• Real-time messaging with WebSocket connections
• Custom emoji and emote system
• Moderator tools and user banning
• User roles and permissions (subscriber, moderator, VIP)
• Message filtering and spam protection
• Raid notifications and alerts
• Stream integration for overlays
• Dark/light theme support
• Cross-platform (iOS, Android, Web)
• Push notifications for mentions
• Chat replay and archiving

Built with Flutter for a truly native experience across all platforms, the app maintains consistent performance even with thousands of concurrent users. The moderation system helps streamers maintain a positive community environment.`,
        technologies: ['Flutter', 'Dart', 'Firebase', 'WebSocket', 'Node.js'],
        image: 'https://images.unsplash.com/photo-1675865254433-6ba341f0f00b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjBjaGF0JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NDQxMTk3MHww&ixlib=rb-4.1.0&q=80&w=1080',
        liveUrl: '',
        githubUrl: 'https://github.com/yourusername/streamer-chat'
      }
    ];

    const sampleBlogs = [
      {
        id: '1',
        title: 'Building Scalable E-Commerce Platforms: Lessons from Oclicon',
        excerpt: 'Discover the key architectural decisions and best practices I learned while building a full-featured e-commerce platform from scratch.',
        content: `When I set out to build Oclicon, I knew that scalability would be crucial. An e-commerce platform needs to handle traffic spikes during sales events, manage thousands of products, and process payments securely. Here's what I learned along the way.

Architecture Decisions

The first major decision was choosing the right tech stack. I opted for a MERN stack (MongoDB, Express, React, Node.js) because of its flexibility and JavaScript across the entire stack. MongoDB's document-based structure was perfect for our product catalog, which needed to accommodate varying product attributes.

For the frontend, React provided the component-based architecture we needed to create reusable UI elements. The shopping cart, product cards, and checkout flow all benefited from React's state management capabilities. We used Redux for global state management, particularly for the cart and user authentication.

Payment Processing

Integrating Stripe was one of the most critical aspects of the project. Security was paramount, so we implemented tokenization to ensure that sensitive card data never touched our servers. The checkout flow uses Stripe Elements for a seamless, PCI-compliant payment experience.

We also built a robust webhook system to handle payment confirmations, refunds, and subscription renewals. This asynchronous approach ensures that our application remains responsive even during payment processing.

Performance Optimization

To handle high traffic, we implemented several optimization strategies:

1. Database indexing on frequently queried fields (product categories, prices, user IDs)
2. Redis caching for product listings and user sessions
3. Image optimization using Next.js Image component and lazy loading
4. Code splitting to reduce initial bundle size
5. CDN integration for static assets

The admin dashboard deserved special attention. We implemented pagination, infinite scroll, and virtual scrolling for large datasets. Managers can now easily handle catalogs with thousands of products without performance degradation.

Lessons Learned

The biggest lesson was the importance of planning for scale from day one. Refactoring a monolithic application into microservices later would have been much more painful. We also learned that user experience matters just as much as technical excellence – a slow checkout process can kill conversions, regardless of how elegant the code is.

Security was another critical area. We implemented JWT authentication, rate limiting, SQL injection prevention, and regular security audits. In e-commerce, trust is everything.

Looking back, building Oclicon was an incredible learning experience that touched every aspect of full-stack development. The platform now serves thousands of users and processes hundreds of transactions daily.`,
        date: 'November 15, 2024',
        author: 'Your Name',
        tags: ['E-commerce', 'React', 'Node.js', 'MongoDB', 'Architecture']
      },
      {
        id: '2',
        title: 'Real-Time Features in Web Applications: A Deep Dive',
        excerpt: 'How I implemented real-time functionality in my Reddit clone using WebSockets and optimistic UI updates.',
        content: `Real-time features have become essential in modern web applications. Users expect instant feedback and live updates without refreshing the page. While building my Reddit clone, I had to implement several real-time features: live voting, instant comment updates, and notification systems.

The WebSocket Connection

The foundation of any real-time application is a persistent connection between the client and server. I chose Socket.io for its ease of use and automatic fallback mechanisms. When WebSocket isn't available, Socket.io automatically falls back to long polling, ensuring compatibility across all browsers.

Setting up the connection was straightforward, but managing it properly required careful thought. We needed to handle reconnections gracefully, manage multiple concurrent connections from the same user across different tabs, and ensure that connections are properly cleaned up when users navigate away.

Optimistic UI Updates

One of the most important patterns I implemented was optimistic updates. When a user upvotes a post, we immediately update the UI to reflect the new vote count, before the server responds. This creates the illusion of instant feedback.

The tricky part is handling failures. If the server rejects the vote (maybe the user already voted), we need to roll back the optimistic update. We implemented a rollback queue that tracks all optimistic updates and can revert them if the server response indicates an error.

Room-Based Broadcasting

For efficiency, we organized our Socket.io implementation around "rooms." When a user views a post, they join that post's room. When someone comments or votes, we broadcast the update only to users in that room. This dramatically reduces bandwidth and ensures users only receive updates for content they're actively viewing.

We also implemented a smart room cleanup system. When a user navigates away from a post, they leave that room. This prevents memory leaks and reduces the number of unnecessary broadcasts.

Handling Race Conditions

Real-time systems introduce interesting race conditions. What happens when two users vote on the same post simultaneously? We implemented a version-based conflict resolution system. Each post has a version number that increments with each change. If a client sends an update with an outdated version number, the server rejects it and sends back the latest state.

For comments, we use a timestamp-based ordering system. Comments are sorted by their creation timestamp, ensuring consistent ordering across all clients even when updates arrive out of order.

Performance Considerations

With potentially thousands of concurrent connections, performance became crucial. We implemented several optimizations:

1. Connection pooling to manage database connections efficiently
2. Redis pub/sub for horizontal scaling across multiple server instances
3. Message throttling to prevent spam
4. Automatic reconnection with exponential backoff
5. Heartbeat messages to detect dead connections

Scaling Real-Time Features

The most challenging aspect was scaling horizontally. When you have multiple server instances, you need a message broker to coordinate between them. We used Redis pub/sub as our message broker. When a server receives an update, it publishes it to Redis, which then broadcasts it to all other server instances.

This architecture allows us to handle millions of concurrent connections by adding more server instances as needed.

Conclusion

Building real-time features is complex but incredibly rewarding. The key is to start with a solid foundation, handle edge cases gracefully, and always keep performance in mind. The instant feedback creates a much more engaging user experience, and users definitely notice the difference.`,
        date: 'November 10, 2024',
        author: 'Your Name',
        tags: ['WebSocket', 'Real-time', 'Socket.io', 'React', 'Node.js']
      },
      {
        id: '3',
        title: 'From Web to Mobile: My Journey with Flutter',
        excerpt: 'Transitioning from web development to mobile app development with Flutter taught me valuable lessons about cross-platform development.',
        content: `As a web developer comfortable with React and JavaScript, I was initially hesitant to dive into mobile development. The prospect of learning Swift and Kotlin for iOS and Android respectively seemed daunting. Then I discovered Flutter, and everything changed.

Why Flutter?

Flutter's promise of "write once, run anywhere" immediately appealed to me. But it was the hot reload feature that really sold me. Being able to see changes instantly without recompiling the entire app reminded me of web development's instant feedback loop.

The Dart language was surprisingly approachable. Coming from JavaScript, the syntax felt familiar, but Dart's strong typing and null safety caught errors at compile time that would have been runtime bugs in JavaScript.

Building the Streamer Chat App

For my first serious Flutter project, I decided to build a real-time chat application for streamers. This would test Flutter's performance with rapid UI updates and push me to learn platform-specific features like notifications.

The widget-based architecture of Flutter felt very similar to React's component model. Everything is a widget, from layout containers to text elements. This composability made it easy to build complex UIs from simple, reusable pieces.

State Management Challenges

One of the biggest challenges was choosing a state management solution. Flutter offers several options: Provider, Riverpod, BLoC, GetX, and more. I ultimately chose Riverpod for its type safety and testability.

Managing real-time chat state was complex. Messages needed to be added to the UI instantly, scroll position had to be maintained, and typing indicators had to update smoothly. Riverpod's StreamProvider was perfect for connecting our WebSocket streams directly to the UI.

Platform-Specific Features

While Flutter's cross-platform nature is its main selling point, I learned that you sometimes need to write platform-specific code. For push notifications, I used the flutter_local_notifications package and had to configure different settings for iOS and Android.

The FirebaseMessaging integration required understanding both platforms' permission systems. iOS requires explicit user permission for notifications, while Android has different permission requirements based on the API level.

Performance Optimization

Flutter's performance out of the box is impressive, but real-time chat with potentially thousands of messages required careful optimization. I implemented:

1. Lazy loading for message history
2. Image caching for user avatars and custom emotes
3. Const constructors wherever possible to reduce rebuilds
4. ListView.builder for efficient list rendering
5. Debouncing for typing indicators

The Flutter DevTools profiler was invaluable for identifying performance bottlenecks. I discovered that some of my widgets were rebuilding unnecessarily, which I fixed by using const constructors and carefully managing state scope.

Deployment and Distribution

Publishing to both the App Store and Google Play Store was an eye-opening experience. Each platform has its own requirements, review processes, and gotchas. Apple's review process is notoriously strict, while Google's is more automated.

I learned to use Fastlane for automating builds and deployments, which saved countless hours of manual work.

Comparing Web and Mobile Development

The development experience is different in several ways:

Web development has instant deployment – push to production and users get the update immediately. Mobile apps require review processes and users need to update their apps.

Mobile development requires thinking about offline functionality from the start. The streamer chat app needed to queue messages when offline and sync them when connection is restored.

Performance constraints are stricter on mobile. Battery life and data usage matter more than on web.

However, mobile apps can leverage platform features like push notifications, camera access, and biometric authentication more easily than web apps.

Conclusion

Learning Flutter was one of the best investments I've made as a developer. It opened up an entirely new platform while building on skills I already had. The ability to create beautiful, performant apps for both iOS and Android with a single codebase is genuinely game-changing.

For web developers considering mobile development, Flutter is an excellent entry point. The skills transfer well, and you'll be productive much faster than learning native development from scratch.`,
        date: 'November 5, 2024',
        author: 'Your Name',
        tags: ['Flutter', 'Dart', 'Mobile Development', 'Cross-platform']
      },
      {
        id: '4',
        title: 'Django vs Node.js: Choosing the Right Backend Framework',
        excerpt: 'A comparison of Django and Node.js based on my experience building production applications with both frameworks.',
        content: `I've built production applications with both Django and Node.js, and I frequently get asked which one is better. The truth is, both are excellent frameworks, but they excel in different scenarios.

When Django Shines

Django is a "batteries included" framework. It comes with an ORM, admin panel, authentication system, and more out of the box. For my Reddit clone project, Django was the perfect choice.

The Django ORM is incredibly powerful. Complex database queries can be written in Python without touching SQL. For a social platform with complex relationships between users, posts, comments, and votes, this was invaluable.

The built-in admin panel is Django's secret weapon. Within minutes, I had a fully functional admin interface for managing users, moderating content, and viewing analytics. Building something equivalent in Node.js would have taken days.

Django's security features are also top-notch. CSRF protection, SQL injection prevention, XSS protection – it's all there by default. This is crucial for any application handling user data.

When Node.js Excels

For my e-commerce platform, I chose Node.js with Express. The JavaScript everywhere approach meant my team didn't need to context-switch between languages. Frontend developers could contribute to backend code without learning Python.

Node.js's asynchronous, event-driven architecture is perfect for I/O-heavy applications. When processing payments, sending emails, and updating inventory simultaneously, Node.js handles these concurrent operations elegantly.

The npm ecosystem is massive. Need to integrate with a third-party API? There's probably a well-maintained package for it. This rapid development capability helped us ship features faster.

Real-time features are also more natural in Node.js. Socket.io integration is seamless, and the event-driven nature of Node.js aligns perfectly with WebSocket connections.

Performance Comparison

In my experience, raw performance differences are often overstated. Both frameworks can handle significant traffic when properly optimized.

Django with Gunicorn and proper database indexing handled our Reddit clone's thousands of concurrent users without issues. We added Redis caching for frequently accessed data, and response times stayed under 100ms.

Node.js naturally handles concurrent connections well due to its event loop. Our e-commerce platform processed hundreds of transactions per minute without breaking a sweat. However, CPU-intensive tasks (like image processing) required spawning worker threads or offloading to separate services.

Development Experience

Django's opinionated nature can be both a blessing and a curse. The "Django way" of doing things makes it easy to maintain consistency across large teams. Models, views, templates – everything has its place.

Node.js with Express is minimalist. This flexibility is liberating but can lead to inconsistent code organization across teams. We had to establish strong conventions to maintain code quality.

Testing is excellent in both ecosystems. Django's test client makes it easy to test views and forms. Jest and Mocha provide great testing experiences for Node.js applications.

Scaling Considerations

Both frameworks scale horizontally well. We've successfully deployed Django apps behind load balancers with multiple instances. Node.js's lightweight nature means you can run more instances on the same hardware.

For our Django application, we used Celery for background tasks. This added complexity but provided robust task queuing and scheduling.

Node.js handles background tasks differently. We used Bull for job queues, which integrates nicely with Redis.

Making the Choice

Choose Django when:
- You want rapid development with lots of built-in features
- Your team prefers Python
- You need a robust admin panel
- You're building a content-heavy application
- Security is paramount and you want secure defaults

Choose Node.js when:
- You want JavaScript everywhere
- You need real-time features
- Your application is I/O heavy
- You prefer flexibility over convention
- Your team is already JavaScript-focused

Conclusion

Both Django and Node.js are mature, production-ready frameworks. I keep both in my toolkit and choose based on project requirements. Understanding the strengths of each makes you a more versatile developer.

The best framework is the one that helps you ship quality software efficiently. Everything else is details.`,
        date: 'October 28, 2024',
        author: 'Your Name',
        tags: ['Django', 'Node.js', 'Backend', 'Python', 'JavaScript', 'Architecture']
      }
    ];

    localStorage.setItem('projects', JSON.stringify(sampleProjects));
    localStorage.setItem('blogs', JSON.stringify(sampleBlogs));
    localStorage.setItem('dataInitialized', 'true');
  }
}
