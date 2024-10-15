import './Category.css'

const Category = ({ category }) => {
	return (
		<ul className="nav-main-menu">
			<li>
				<a>{category.name}</a>
					<ul className="nav-main-submenu">
						{category.sublista.map((subMenu, index) => (
							<li key={index}>
								<a>{subMenu.name}</a>
							</li>
						))}
					</ul>
			</li>
		</ul>
	);
};

export default Category;