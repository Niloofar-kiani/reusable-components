import  useNavigate from '../hooks/use-navigate';
import classNames from 'classnames';


function Link({ to, children, className, activeClass }) {
  const { navigate, currentPath } = useNavigate();

const classes = classNames('text-blue-500',className,
currentPath === to && activeClass);

  const handleClick = (event) => {
    //open in a new tab
    if(event.metaKey || event.ctrlKey){
      return;
    }

    event.preventDefault();
    navigate(to);
  };

  return <a className={classes} href={to} onClick={handleClick}>{children}</a>;
}

export default Link;

