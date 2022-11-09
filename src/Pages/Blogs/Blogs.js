import React from "react";
import useChangeTitle from "../../hooks/useChangeTitle";

const Blogs = () => {
  useChangeTitle("Blogs");
  return (
    <div className="px-6 md:px-12 py-10 min-h-screen mb-5">
      <h2 className="text-center font-bold text-5xl mb-20">
        Welcome to my Blog
      </h2>

      <div className="space-y-5">
        {/* Difference between SQL and NoSQL */}
        <article className="space-y-4">
          <h3 className="text-4xl font-semibold">
            Difference between SQL and NoSQL
          </h3>
          <div>
            SQL databases are primarily called as Relational Databases (RDBMS);
            whereas NoSQL database are primarily called as non-relational or
            distributed database.
          </div>
          <div>
            SQL databases defines and manipulates data based structured query
            language (SQL). Seeing from a side this language is extremely
            powerful. SQL is one of the most versatile and widely-used options
            available which makes it a safe choice especially for great complex
            queries. But from other side it can be restrictive. SQL requires you
            to use predefined schemas to determine the structure of your data
            before you work with it. Also all of your data must follow the same
            structure. This can require significant up-front preparation which
            means that a change in the structure would be both difficult and
            disruptive to your whole system. A NoSQL database has dynamic schema
            for unstructured data. Data is stored in many ways which means it
            can be document-oriented, column-oriented, graph-based or organized
            as a KeyValue store. This flexibility means that documents can be
            created without having defined structure first. Also each document
            can have its own unique structure. The syntax varies from database
            to database, and you can add fields as you go.
          </div>
        </article>
        {/* What is JWT, and how does it work? */}
        <article className="space-y-4">
          <h3 className="text-4xl font-semibold">
            What is JWT, and how does it work?
          </h3>
          <div>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
          </div>
          <div>
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted. A JWT is a string
            made up of three parts, separated by dots (.), and serialized using
            base64. In the most common serialization format, compact
            serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
          </div>
        </article>
        {/* What is the difference between javascript and NodeJS? */}
        <article className="space-y-4">
          <h3 className="text-4xl font-semibold">
            What is the difference between javascript and NodeJS?
          </h3>
          <div>
            <span className="text-lg font-bold">Node.js </span>
            is a cross-platform and opensource Javascript runtime environment
            that allows the javascript to be run on the server-side. Nodejs
            allows Javascript code to run outside the browser. Nodejs comes with
            a lot of modules and mostly used in web development.
          </div>
          <div>
            <span className="text-lg font-bold">JavaScript</span> is a Scripting
            language. It is mostly abbreviated as JS. It can be said that
            Javascript is the updated version of the ECMA script. Javascript is
            a high-level programming language that uses the concept of Oops but
            it is based on prototype inheritance.
          </div>
        </article>
        {/* How does NodeJS handle multiple requests at the same time? */}
        <article className="space-y-4">
          <h3 className="text-4xl font-semibold">
            How does NodeJS handle multiple requests at the same time?
          </h3>
          <div>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blogs;
