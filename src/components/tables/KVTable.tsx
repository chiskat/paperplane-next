import { Table, TableProps, TableTbody, TableTd, TableTr } from '@mantine/core'
import clsx from 'clsx'
import { ReactNode } from 'react'

export interface KVTableProps {
  tableProps?: TableProps
  children?: ReactNode
  className?: string
}

export function KVTable(props: KVTableProps) {
  const { tableProps, children, className } = props

  return (
    <Table
      className={className}
      withRowBorders={false}
      horizontalSpacing={0}
      verticalSpacing={6}
      {...tableProps}
    >
      <TableTbody>{children}</TableTbody>
    </Table>
  )
}

export interface KVTableRowProps {
  label: ReactNode
  icon?: ReactNode
  classNames?: {
    label?: string
    field?: string
  }
  children?: ReactNode
  className?: string
}

export function KVTableRow(props: KVTableRowProps) {
  const { label, icon, children, classNames, className } = props

  return (
    <TableTr className={className}>
      <TableTd
        className={clsx(
          'w-0 cursor-default pr-2 leading-[1.6] text-nowrap text-gray-900',
          classNames?.label
        )}
      >
        {icon} {label}：
      </TableTd>

      <TableTd className={clsx('font-sans leading-[1.2] text-gray-600', classNames?.field)}>
        {children}
      </TableTd>
    </TableTr>
  )
}
