import { FC, useEffect, useState } from "react";
import { Form, Input, Button, Radio, Select } from "antd";
import { IPost } from "types/blog/post";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import TextArea from "antd/lib/input/TextArea";
import { articleMock } from "utils/mockdata";

interface IArticleForm {
	onSubmit: (formData: any) => void;
	data?: any;
}

const { Option } = Select;

const ArticleForm: FC<IArticleForm> = ({ onSubmit, data }) => {
	const [state, setState] = useState<IPost>({
		title: "",
		sub_title: "",
		brief_header: "",
		article: "",
		src_background: "",
		alt_background: "",
		author: "",
		is_draft: false
	});

	useEffect(() => {
		data && setState(data);
		console.log("into form", data);
	}, [data]);

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(state);
	};

	const [componentSize, setComponentSize] = useState<SizeType | "default">(
		"default"
	);
	const onFormLayoutChange = ({ size }: { size: SizeType }) => {
		setComponentSize(size);
	};

	const children = [];
	for (let i = 10; i < 36; i++) {
		children.push(
			<Option value="" key={i.toString(36) + i}>
				{i.toString(36) + i}
			</Option>
		);
	}

	const handleChange = (event: any) => {
		const { name, value } = event.target;
		setState((prev) => ({ ...prev, [name]: value }));
	};

	const handleAutoComplete = () => setState(articleMock);

	return (
		<Form
			labelCol={{ span: 4 }}
			wrapperCol={{ span: 14 }}
			layout="horizontal"
			initialValues={{ size: componentSize }}
			onValuesChange={onFormLayoutChange}
			size={componentSize as SizeType}
		>
			<Form.Item>
				<span>Titulo</span>
				<Input
					type="text"
					name="title"
					value={state.title}
					onChange={handleChange}
				/>
			</Form.Item>
			<Form.Item>
				<span>Subtitulo</span>
				<Input
					onChange={handleChange}
					value={state.sub_title}
					name="sub_title"
				/>
			</Form.Item>
			<Form.Item>
				<span>Resumen</span>
				<TextArea
					name="brief_header"
					rows={1}
					value={state.brief_header}
					onChange={handleChange}
				/>
			</Form.Item>
			<Form.Item>
				<span>Imagen</span>
				<Input type="file" />
			</Form.Item>
			<Form.Item>
				<span>Tipo de Publicacion</span>
				<Radio.Group>
					<Radio.Button value="default">Posteo Portada</Radio.Button>
					<Radio.Button value="small">Articulo</Radio.Button>
				</Radio.Group>
			</Form.Item>
			<Form.Item>
				<span>Autores fotografía / ilustracion </span>
				<Select>
					<Select.Option value="demo">Juana diseño</Select.Option>
					<Select.Option value="demo1">Pepita pistolera</Select.Option>
				</Select>
			</Form.Item>
			<Form.Item>
				<span>Etiquetas</span>
				<Select
					mode="tags"
					size="middle"
					placeholder="Please select"
					defaultValue={["a10", "c12"]}
					onChange={handleChange}
					style={{ width: "100%" }}
				>
					{children}
				</Select>
			</Form.Item>
			<Form.Item>
				<span>Autores</span>
				<Input name="author" value={state.author} onChange={handleChange} />
			</Form.Item>
			<Form.Item>
				<TextArea
					name="article"
					value={state.article}
					onChange={handleChange}
					rows={5}
				/>
			</Form.Item>
			<Form.Item>
				<Button onClick={handleSubmit}>Postear</Button>
				<Button>Guardar y postear después</Button>
				<Button onClick={handleAutoComplete}>autocompletar ;)</Button>
			</Form.Item>
		</Form>
	);
};

export default ArticleForm;
