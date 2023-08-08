import React from "react";

//This will contain different chat messages which are implemented in the nested way
const commentsData = [
  {
    name: "Arun Francis Tellis",
    text: "Hi I am Arun",
    replies: [
      {
        name: "Arun Francis Tellis",
        text: "Hi I am Arun",
        replies: [
          {
            name: "Arun Francis Tellis",
            text: "Hi I am Arun",
            replies: [
              {
                name: "Arun Francis Tellis",
                text: "Hi I am Arun",
                replies: [
                  {
                    name: "Arun Francis Tellis",
                    text: "Hi I am Arun",
                    replies: [
                      {
                        name: "Arun Francis Tellis",
                        text: "Hi I am Arun",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Arun Francis Tellis",
    text: "Hi I am Arun",
    replies: [
      {
        name: "Arun Francis Tellis",
        text: "Hi I am Arun",
        replies: [],
      },
    ],
  },
  {
    name: "Arun Francis Tellis",
    text: "Hi I am Arun",
    replies: [
      {
        name: "Arun Francis Tellis",
        text: "Hi I am Arun",
        replies: [],
      },
    ],
  },
  {
    name: "Arun Francis Tellis",
    text: "Hi I am Arun",
    replies: [
      {
        name: "Arun Francis Tellis",
        text: "Hi I am Arun",
        replies: [],
      },
    ],
  },
  {
    name: "Arun Francis Tellis",
    text: "Hi I am Arun",
    replies: [
      {
        name: "Arun Francis Tellis",
        text: "Hi I am Arun",
        replies: [],
      },
    ],
  },
];

const Comments = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex bg-gray-100 rounded-lg my-3">
      <img
        //This will show the user icon in the comment section
        className="w-8 h-8"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />
      {/* These will reflect the name and comment of the user */}
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p className="pl-2">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comments data={comment} />
      <div className="pl-5 border-l mg-l">
        {/* This is the recurrence call of the CommentList to show the nesting of the comments */}
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="w-[67rem] m-5 p-2 ">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
