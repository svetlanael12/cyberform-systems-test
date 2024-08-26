import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { StyledTextfieldInput } from '../../../../components/styled-textfield-input';
import { observer } from 'mobx-react-lite';

export type SearchInputPostsProps = {
    name: string;
    onSearch: (value: string) => void;
    placeholder?: string;
};

export const SearchInputPosts = observer(
    (props: SearchInputPostsProps): JSX.Element => {
        const { placeholder, name, onSearch } = props;
        const [value, setValue] = useState('');
        const [searchValue, setSearchValue] = useState('');

        const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
            setValue(event.target.value);
        };

        useEffect(() => {
            onSearch(searchValue);
        }, [searchValue]);

        const debouncedSearch = debounce((search?: string) => {
            setSearchValue(search || '');
        }, 300);

        useEffect(() => {
            if (value !== undefined) {
                debouncedSearch(value);
            }
            return () => {
                debouncedSearch.cancel();
            };
        }, [value]);

        return (
            <StyledTextfieldInput
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        );
    }
);
