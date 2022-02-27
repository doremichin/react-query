import styled from 'styled-components'
import {useMutation} from "react-query";
import {setPostRest} from "../../../api/react-query/setPostRest";
import {useForm} from "react-hook-form";

const RQAddPostContainer = () => {
    const mutation = useMutation(newPost => {
        return setPostRest(newPost)
    })

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const newPost = {
            ...data,
            userId : Math.floor(Math.random()*100)
        }
        mutation.mutate(newPost);
    }
    return(
        <Container>
            <Form>
                <Label htmlFor={'title'}>제목</Label>
                <Input id={'title'} type={'text'} {...register("title")}/>
                <Label htmlFor={'body'}>내용</Label>
                <TextArea id={'body'} type={'text'} {...register("body")}/>
                <Button onClick={handleSubmit(onSubmit)}>
                    등록하기
                </Button>
            </Form>
        </Container>
    )
};

const Container = styled.div`

`;
const Form = styled.form`
  margin: 0 auto;
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Label = styled.label`
    margin: 20px;
`;
const Input = styled.input`
  
`;
const TextArea = styled.textarea`
  
`;
const Button = styled.button`
  
`;
export default RQAddPostContainer;
