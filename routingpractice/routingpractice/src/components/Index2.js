const Index2 = (props) => {
    return (
        <div>
            {isNaN(props.Id) ? "The word is : " + props.Id : "The ID is : " + props.Id}
            
        </div>
    );
}

export default Index2
