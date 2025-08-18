'use client';

import React from 'react';
import { FilterCheckbox, FilterChecboxProps } from './filter-checkbox';
import { Input } from '../ui/input';

type Item = FilterChecboxProps;

interface Props {
	title: string;
	items: Item[];
	defaultItems?: Item[];
	limit?: number;
	searchInputPlaceholder?: string;
	className?: string;
	selectedIds?: Set<string>;
	onClickCheckbox?: (value: string) => void;
	loading?: boolean;
	name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = 'Поиск...',
	className,
	selectedIds,
	onClickCheckbox,
	loading,
	name,
}) => {
	const [showAll, setShowAll] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState('');

	const filteredItems = React.useMemo(
		() =>
			items.filter((it) =>
				it.text.toLowerCase().includes(searchValue.toLowerCase()),
			),
		[items, searchValue],
	);

	if (loading) {
		return (
			<div className={className}>
				<p className="font-bold mb-3">{title}</p>
				{Array.from({ length: limit }).map((_, i) => (
					<div key={i} className="w-full mb-4 h-6 bg-gray-200 rounded-[8px] animate-pulse" />
				))}
				<div className="w-28 h-4 bg-gray-200 rounded-[8px] animate-pulse" />
			</div>
		);
	}

	const visibleItems = showAll
		? filteredItems
		: (defaultItems ?? filteredItems).slice(0, limit);

	return (
		<div className={className}>
			<p className="font-bold mb-3">{title}</p>

			{showAll && (
				<div className="mb-5">
					<Input
						placeholder={searchInputPlaceholder}
						className="bg-gray-50 border-none"
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
				</div>
			)}

			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{visibleItems.map((item) => (
					<FilterCheckbox
						key={String(item.value)}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={selectedIds?.has(item.value)}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
						name={name}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button
						type="button"
						onClick={() => setShowAll((v) => !v)}
						className="text-primary mt-3"
					>
						{showAll ? 'Скрыть' : '+ Показать все'}
					</button>
				</div>
			)}
		</div>
	);
};
