


const commentsData = [
    {
        name: "Sadaf Ansari",
        text: "Lorem ipsum dolor sit amet, consecter shhg",
        replies: [
            {
                name: "Sadaf Ansari",
                text: "Lorem ipsum dolor sit amet, consecter shhg",
                replies: [],
            },
            {
                name: "Sadaf Ansari",
                text: "Lorem ipsum dolor sit amet, consecter shhg",
                replies: [],
            },
            {
                name: "Sadaf Ansari",
                text: "Lorem ipsum dolor sit amet, consecter shhg",
                replies: [],
            },
        ],
    },
    {
        name: "Sadaf Ansari",
        text: "Lorem ipsum dolor sit amet, consecter shhg",
        replies: [],
    },
    {
        name: "Sadaf Ansari",
        text: "Lorem ipsum dolor sit amet, consecter shhg",
        replies: [],
    },
    {
        name: "Sadaf Ansari",
        text: "Lorem ipsum dolor sit amet, consecter shhg",
        replies: [],
    },
    {
        name: "Sadaf Ansari",
        text: "Lorem ipsum dolor sit amet, consecter shhg",
        replies: [],
    },
                
];

const Comment = ({ data }) => {
    console.log(data);
    const { name, text } = data;

    return (
        
    <div  className='flex mt-4 ml-3 bg-gray-200 rounded-sm shadow-lg'>
        <img className="w-12 h-12"
            alt="user-icon"
            src="https://static.vecteezy.com/system/resources/previews/000/574/512/large_2x/vector-sign-of-user-icon.jpg"/>
        <div>
        <h1 className="font-semibold">{name}</h1>
        <p>{text}</p>
        
        </div>
    </div>
    
    );
}; 

const CommentsList = ({comments}) => {
      return comments.map((comment, index) => <Comment key={index} data={comment} />);
}

const CommentContainer = () => {
    return (
        <div>
            <h1 className="mt-3 ml-6 font-bold text-lg">Comments: </h1>
            <CommentsList comments={commentsData} />
            
        </div>
    );
};
export default CommentContainer;