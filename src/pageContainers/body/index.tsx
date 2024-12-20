'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Input } from '@/components';
import { NavigationHeader } from '@/components';
import { usePatchMyBodyInfo } from '@/hooks';
import { bodyInfoSchema } from '@/schemas';
import { BodyInfoFormType } from '@/types';
import { Path } from '@/types';

import { SubmitHandler, useForm } from 'react-hook-form';

import * as S from './style';

const runningShoesSrc = '/imgs/runningShoes.png';

const BodyPage = () => {
  const { push } = useRouter();

  const {
    register,
    formState: {
      errors: { height, weight },
    },
    handleSubmit,
  } = useForm<BodyInfoFormType>({
    resolver: zodResolver(bodyInfoSchema),
  });

  const { mutate: patchMyBodyInfo } = usePatchMyBodyInfo({
    onSuccess: () => push(Path.MAIN),
  });

  const handleFormSubmit: SubmitHandler<BodyInfoFormType> = ({
    height,
    weight,
  }) => {
    const body = {
      height: height,
      weight: weight,
    };

    patchMyBodyInfo(body);
  };

  return (
    <S.Container onSubmit={handleSubmit(handleFormSubmit)} noValidate>
      <NavigationHeader navigateUrl={Path.LOGIN} />

      <S.MiddleBox>
        <S.ImageWrapper>
          <Image src={runningShoesSrc} alt='런닝화 이미지' fill />
        </S.ImageWrapper>
        <S.Description>키와 몸무게를 입력해주세요</S.Description>
        <S.InputBox>
          <Input
            {...register('height', {
              valueAsNumber: true,
            })}
            type='number'
            unit='cm'
            placeholder='자신의 키를 입력해주세요'
            errorMessage={height?.message}
          />
          <Input
            {...register('weight', {
              valueAsNumber: true,
            })}
            type='number'
            unit='kg'
            placeholder='자신의 몸무게를 입력해주세요'
            errorMessage={weight?.message}
          />
        </S.InputBox>
      </S.MiddleBox>

      <S.ConfirmButton type='submit'>확인</S.ConfirmButton>
    </S.Container>
  );
};

export default BodyPage;
