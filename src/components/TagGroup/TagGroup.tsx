import React, { ReactNode } from 'react';
import cls from './TagGroup.module.scss';

interface Props {
  label?: string;
  tags: ReactNode[];
}

const TagGroup: React.FC<Props> = ({ label, tags }) => {
  return (
    <div className={cls.container}>
      {label && <p className={cls.label}>{label}</p>}
      <div className={cls.divider} />
      <div className={cls.tags}>
        {
          tags.map((el, index) => <div className={cls.tag} key={index}>{el}</div>)
        }
      </div>
      <div className={cls.divider} />
    </div>);
};

export default TagGroup;
