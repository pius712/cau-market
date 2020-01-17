export default function (context){
    if(!context.store.state.users.me){
        return context.redirect('/');
    }
}