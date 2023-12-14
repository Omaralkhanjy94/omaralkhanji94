var _articleTitle = "Article #";
export const metadata = {
    title: _getArticleTitle(),
    };

    

    function _getArticleTitle(){
        return _articleTitle;
      };
export default function ShowArticlePage(props){
    _print(props);
    _articleTitle = "#"+props.params.title;
    _print("Now I print "+ props.params.title)
    return(
        <div>
            <h1>Show An Article</h1>
            <h2>{props.params.title}</h2>
        </div>
    );
}

function _print(text){
    console.log(text);
}